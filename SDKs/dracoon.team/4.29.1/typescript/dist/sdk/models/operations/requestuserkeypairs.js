var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var RequestUserKeyPairsHeaders = /** @class */ (function (_super) {
    __extends(RequestUserKeyPairsHeaders, _super);
    function RequestUserKeyPairsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestUserKeyPairsHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestUserKeyPairsHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestUserKeyPairsHeaders;
}(SpeakeasyBase));
export { RequestUserKeyPairsHeaders };
var RequestUserKeyPairsRequest = /** @class */ (function (_super) {
    __extends(RequestUserKeyPairsRequest, _super);
    function RequestUserKeyPairsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserKeyPairsHeaders)
    ], RequestUserKeyPairsRequest.prototype, "headers", void 0);
    return RequestUserKeyPairsRequest;
}(SpeakeasyBase));
export { RequestUserKeyPairsRequest };
var RequestUserKeyPairsResponseOutput = /** @class */ (function (_super) {
    __extends(RequestUserKeyPairsResponseOutput, _super);
    function RequestUserKeyPairsResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestUserKeyPairsResponseOutput.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestUserKeyPairsResponseOutput.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestUserKeyPairsResponseOutput.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.UserKeyPairContainerOutput }),
        __metadata("design:type", Array)
    ], RequestUserKeyPairsResponseOutput.prototype, "userKeyPairContainers", void 0);
    return RequestUserKeyPairsResponseOutput;
}(SpeakeasyBase));
export { RequestUserKeyPairsResponseOutput };
