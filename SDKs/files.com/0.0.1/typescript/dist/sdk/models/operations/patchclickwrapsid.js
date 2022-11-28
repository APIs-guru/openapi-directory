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
var PatchClickwrapsIdPathParams = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdPathParams, _super);
    function PatchClickwrapsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchClickwrapsIdPathParams.prototype, "id", void 0);
    return PatchClickwrapsIdPathParams;
}(SpeakeasyBase));
export { PatchClickwrapsIdPathParams };
export var PatchClickwrapsIdRequestBodyUseWithBundlesEnum;
(function (PatchClickwrapsIdRequestBodyUseWithBundlesEnum) {
    PatchClickwrapsIdRequestBodyUseWithBundlesEnum["None"] = "none";
    PatchClickwrapsIdRequestBodyUseWithBundlesEnum["Available"] = "available";
    PatchClickwrapsIdRequestBodyUseWithBundlesEnum["Require"] = "require";
})(PatchClickwrapsIdRequestBodyUseWithBundlesEnum || (PatchClickwrapsIdRequestBodyUseWithBundlesEnum = {}));
export var PatchClickwrapsIdRequestBodyUseWithInboxesEnum;
(function (PatchClickwrapsIdRequestBodyUseWithInboxesEnum) {
    PatchClickwrapsIdRequestBodyUseWithInboxesEnum["None"] = "none";
    PatchClickwrapsIdRequestBodyUseWithInboxesEnum["Available"] = "available";
    PatchClickwrapsIdRequestBodyUseWithInboxesEnum["Require"] = "require";
})(PatchClickwrapsIdRequestBodyUseWithInboxesEnum || (PatchClickwrapsIdRequestBodyUseWithInboxesEnum = {}));
export var PatchClickwrapsIdRequestBodyUseWithUsersEnum;
(function (PatchClickwrapsIdRequestBodyUseWithUsersEnum) {
    PatchClickwrapsIdRequestBodyUseWithUsersEnum["None"] = "none";
    PatchClickwrapsIdRequestBodyUseWithUsersEnum["Require"] = "require";
})(PatchClickwrapsIdRequestBodyUseWithUsersEnum || (PatchClickwrapsIdRequestBodyUseWithUsersEnum = {}));
var PatchClickwrapsIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdRequestBody, _super);
    function PatchClickwrapsIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=body" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=use_with_bundles" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "useWithBundles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=use_with_inboxes" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "useWithInboxes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=use_with_users" }),
        __metadata("design:type", String)
    ], PatchClickwrapsIdRequestBody.prototype, "useWithUsers", void 0);
    return PatchClickwrapsIdRequestBody;
}(SpeakeasyBase));
export { PatchClickwrapsIdRequestBody };
var PatchClickwrapsIdRequest = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdRequest, _super);
    function PatchClickwrapsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchClickwrapsIdPathParams)
    ], PatchClickwrapsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchClickwrapsIdRequestBody)
    ], PatchClickwrapsIdRequest.prototype, "request", void 0);
    return PatchClickwrapsIdRequest;
}(SpeakeasyBase));
export { PatchClickwrapsIdRequest };
var PatchClickwrapsIdResponse = /** @class */ (function (_super) {
    __extends(PatchClickwrapsIdResponse, _super);
    function PatchClickwrapsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ClickwrapEntity)
    ], PatchClickwrapsIdResponse.prototype, "clickwrapEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchClickwrapsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchClickwrapsIdResponse.prototype, "statusCode", void 0);
    return PatchClickwrapsIdResponse;
}(SpeakeasyBase));
export { PatchClickwrapsIdResponse };
