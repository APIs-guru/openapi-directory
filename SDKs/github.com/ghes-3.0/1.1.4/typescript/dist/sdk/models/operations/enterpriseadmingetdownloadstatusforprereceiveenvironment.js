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
var EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams, _super);
    function EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id" }),
        __metadata("design:type", Number)
    ], EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams.prototype, "preReceiveEnvironmentId", void 0);
    return EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams;
}(SpeakeasyBase));
export { EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams };
var EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest = /** @class */ (function (_super) {
    __extends(EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest, _super);
    function EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentPathParams)
    ], EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest.prototype, "pathParams", void 0);
    return EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest;
}(SpeakeasyBase));
export { EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentRequest };
var EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse = /** @class */ (function (_super) {
    __extends(EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse, _super);
    function EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreReceiveEnvironmentDownloadStatus)
    ], EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse.prototype, "preReceiveEnvironmentDownloadStatus", void 0);
    return EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse;
}(SpeakeasyBase));
export { EnterpriseAdminGetDownloadStatusForPreReceiveEnvironmentResponse };
