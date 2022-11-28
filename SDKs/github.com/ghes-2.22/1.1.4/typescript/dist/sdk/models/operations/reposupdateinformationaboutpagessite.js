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
var ReposUpdateInformationAboutPagesSitePathParams = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSitePathParams, _super);
    function ReposUpdateInformationAboutPagesSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSitePathParams.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSitePathParams.prototype, "repo", void 0);
    return ReposUpdateInformationAboutPagesSitePathParams;
}(SpeakeasyBase));
export { ReposUpdateInformationAboutPagesSitePathParams };
export var ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum;
(function (ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum) {
    ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum["GhPages"] = "gh-pages";
    ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum["Master"] = "master";
    ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum["MasterDocs"] = "master /docs";
})(ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum || (ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum = {}));
export var ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum;
(function (ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum) {
    ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum["Root"] = "/";
    ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum["RootDocs"] = "/docs";
})(ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum || (ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = {}));
// ReposUpdateInformationAboutPagesSiteRequestBodySource2
/**
 * Update the source for the repository. Must include the branch name and path.
**/
var ReposUpdateInformationAboutPagesSiteRequestBodySource2 = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBodySource2, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBodySource2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branch" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBodySource2.prototype, "branch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBodySource2.prototype, "path", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBodySource2;
}(SpeakeasyBase));
export { ReposUpdateInformationAboutPagesSiteRequestBodySource2 };
var ReposUpdateInformationAboutPagesSiteRequestBody = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequestBody, _super);
    function ReposUpdateInformationAboutPagesSiteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cname" }),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "cname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=https_enforced" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "httpsEnforced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "public", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Object)
    ], ReposUpdateInformationAboutPagesSiteRequestBody.prototype, "source", void 0);
    return ReposUpdateInformationAboutPagesSiteRequestBody;
}(SpeakeasyBase));
export { ReposUpdateInformationAboutPagesSiteRequestBody };
var ReposUpdateInformationAboutPagesSiteRequest = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteRequest, _super);
    function ReposUpdateInformationAboutPagesSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposUpdateInformationAboutPagesSitePathParams)
    ], ReposUpdateInformationAboutPagesSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposUpdateInformationAboutPagesSiteRequestBody)
    ], ReposUpdateInformationAboutPagesSiteRequest.prototype, "request", void 0);
    return ReposUpdateInformationAboutPagesSiteRequest;
}(SpeakeasyBase));
export { ReposUpdateInformationAboutPagesSiteRequest };
var ReposUpdateInformationAboutPagesSiteResponse = /** @class */ (function (_super) {
    __extends(ReposUpdateInformationAboutPagesSiteResponse, _super);
    function ReposUpdateInformationAboutPagesSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BasicError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "basicError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ScimError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "scimError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationError)
    ], ReposUpdateInformationAboutPagesSiteResponse.prototype, "validationError", void 0);
    return ReposUpdateInformationAboutPagesSiteResponse;
}(SpeakeasyBase));
export { ReposUpdateInformationAboutPagesSiteResponse };
