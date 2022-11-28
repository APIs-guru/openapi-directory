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
export var AccountPatchPermissionsTypeEnum;
(function (AccountPatchPermissionsTypeEnum) {
    AccountPatchPermissionsTypeEnum["Datapoint"] = "datapoint";
    AccountPatchPermissionsTypeEnum["Group"] = "group";
})(AccountPatchPermissionsTypeEnum || (AccountPatchPermissionsTypeEnum = {}));
var AccountPatchPermissionsPathParams = /** @class */ (function (_super) {
    __extends(AccountPatchPermissionsPathParams, _super);
    function AccountPatchPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" }),
        __metadata("design:type", Number)
    ], AccountPatchPermissionsPathParams.prototype, "guestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], AccountPatchPermissionsPathParams.prototype, "type", void 0);
    return AccountPatchPermissionsPathParams;
}(SpeakeasyBase));
export { AccountPatchPermissionsPathParams };
var AccountPatchPermissionsRequests = /** @class */ (function (_super) {
    __extends(AccountPatchPermissionsRequests, _super);
    function AccountPatchPermissionsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ApiCoreRequestsPermissionPatchRequest)
    ], AccountPatchPermissionsRequests.prototype, "apiCoreRequestsPermissionPatchRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", shared.ApiCoreRequestsPermissionPatchRequest)
    ], AccountPatchPermissionsRequests.prototype, "apiCoreRequestsPermissionPatchRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ApiCoreRequestsPermissionPatchRequest)
    ], AccountPatchPermissionsRequests.prototype, "apiCoreRequestsPermissionPatchRequest2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], AccountPatchPermissionsRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], AccountPatchPermissionsRequests.prototype, "textXml", void 0);
    return AccountPatchPermissionsRequests;
}(SpeakeasyBase));
export { AccountPatchPermissionsRequests };
var AccountPatchPermissionsRequest = /** @class */ (function (_super) {
    __extends(AccountPatchPermissionsRequest, _super);
    function AccountPatchPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountPatchPermissionsPathParams)
    ], AccountPatchPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AccountPatchPermissionsRequests)
    ], AccountPatchPermissionsRequest.prototype, "request", void 0);
    return AccountPatchPermissionsRequest;
}(SpeakeasyBase));
export { AccountPatchPermissionsRequest };
var AccountPatchPermissionsResponse = /** @class */ (function (_super) {
    __extends(AccountPatchPermissionsResponse, _super);
    function AccountPatchPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiCoreResponsesEntityUriSystemInt64)
    ], AccountPatchPermissionsResponse.prototype, "apiCoreResponsesEntityUriSystemInt64", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], AccountPatchPermissionsResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AccountPatchPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AccountPatchPermissionsResponse.prototype, "statusCode", void 0);
    return AccountPatchPermissionsResponse;
}(SpeakeasyBase));
export { AccountPatchPermissionsResponse };
