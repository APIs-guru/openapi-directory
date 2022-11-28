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
var ChangeApcuPathParams = /** @class */ (function (_super) {
    __extends(ChangeApcuPathParams, _super);
    function ChangeApcuPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainName" }),
        __metadata("design:type", String)
    ], ChangeApcuPathParams.prototype, "domainName", void 0);
    return ChangeApcuPathParams;
}(SpeakeasyBase));
export { ChangeApcuPathParams };
var ChangeApcuQueryParams = /** @class */ (function (_super) {
    __extends(ChangeApcuQueryParams, _super);
    function ChangeApcuQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain_name" }),
        __metadata("design:type", String)
    ], ChangeApcuQueryParams.prototype, "domainName", void 0);
    return ChangeApcuQueryParams;
}(SpeakeasyBase));
export { ChangeApcuQueryParams };
var ChangeApcuRequest = /** @class */ (function (_super) {
    __extends(ChangeApcuRequest, _super);
    function ChangeApcuRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeApcuPathParams)
    ], ChangeApcuRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeApcuQueryParams)
    ], ChangeApcuRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdatePhpAPcuRequest)
    ], ChangeApcuRequest.prototype, "request", void 0);
    return ChangeApcuRequest;
}(SpeakeasyBase));
export { ChangeApcuRequest };
var ChangeApcuResponse = /** @class */ (function (_super) {
    __extends(ChangeApcuResponse, _super);
    function ChangeApcuResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChangeApcuResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChangeApcuResponse.prototype, "statusCode", void 0);
    return ChangeApcuResponse;
}(SpeakeasyBase));
export { ChangeApcuResponse };
