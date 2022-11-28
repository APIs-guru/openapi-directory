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
var RequestUserKeyPairQueryParams = /** @class */ (function (_super) {
    __extends(RequestUserKeyPairQueryParams, _super);
    function RequestUserKeyPairQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], RequestUserKeyPairQueryParams.prototype, "version", void 0);
    return RequestUserKeyPairQueryParams;
}(SpeakeasyBase));
export { RequestUserKeyPairQueryParams };
var RequestUserKeyPairHeaders = /** @class */ (function (_super) {
    __extends(RequestUserKeyPairHeaders, _super);
    function RequestUserKeyPairHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" }),
        __metadata("design:type", String)
    ], RequestUserKeyPairHeaders.prototype, "xSdsAuthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" }),
        __metadata("design:type", Object)
    ], RequestUserKeyPairHeaders.prototype, "xSdsDateFormat", void 0);
    return RequestUserKeyPairHeaders;
}(SpeakeasyBase));
export { RequestUserKeyPairHeaders };
var RequestUserKeyPairRequest = /** @class */ (function (_super) {
    __extends(RequestUserKeyPairRequest, _super);
    function RequestUserKeyPairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserKeyPairQueryParams)
    ], RequestUserKeyPairRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RequestUserKeyPairHeaders)
    ], RequestUserKeyPairRequest.prototype, "headers", void 0);
    return RequestUserKeyPairRequest;
}(SpeakeasyBase));
export { RequestUserKeyPairRequest };
var RequestUserKeyPairResponseOutput = /** @class */ (function (_super) {
    __extends(RequestUserKeyPairResponseOutput, _super);
    function RequestUserKeyPairResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RequestUserKeyPairResponseOutput.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], RequestUserKeyPairResponseOutput.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RequestUserKeyPairResponseOutput.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserKeyPairContainerOutput)
    ], RequestUserKeyPairResponseOutput.prototype, "userKeyPairContainer", void 0);
    return RequestUserKeyPairResponseOutput;
}(SpeakeasyBase));
export { RequestUserKeyPairResponseOutput };
