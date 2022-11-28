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
var ReposCreateUsingTemplatePathParams = /** @class */ (function (_super) {
    __extends(ReposCreateUsingTemplatePathParams, _super);
    function ReposCreateUsingTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_owner" }),
        __metadata("design:type", String)
    ], ReposCreateUsingTemplatePathParams.prototype, "templateOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_repo" }),
        __metadata("design:type", String)
    ], ReposCreateUsingTemplatePathParams.prototype, "templateRepo", void 0);
    return ReposCreateUsingTemplatePathParams;
}(SpeakeasyBase));
export { ReposCreateUsingTemplatePathParams };
var ReposCreateUsingTemplateRequestBody = /** @class */ (function (_super) {
    __extends(ReposCreateUsingTemplateRequestBody, _super);
    function ReposCreateUsingTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ReposCreateUsingTemplateRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=include_all_branches" }),
        __metadata("design:type", Boolean)
    ], ReposCreateUsingTemplateRequestBody.prototype, "includeAllBranches", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReposCreateUsingTemplateRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], ReposCreateUsingTemplateRequestBody.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private" }),
        __metadata("design:type", Boolean)
    ], ReposCreateUsingTemplateRequestBody.prototype, "private", void 0);
    return ReposCreateUsingTemplateRequestBody;
}(SpeakeasyBase));
export { ReposCreateUsingTemplateRequestBody };
var ReposCreateUsingTemplateRequest = /** @class */ (function (_super) {
    __extends(ReposCreateUsingTemplateRequest, _super);
    function ReposCreateUsingTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReposCreateUsingTemplatePathParams)
    ], ReposCreateUsingTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReposCreateUsingTemplateRequestBody)
    ], ReposCreateUsingTemplateRequest.prototype, "request", void 0);
    return ReposCreateUsingTemplateRequest;
}(SpeakeasyBase));
export { ReposCreateUsingTemplateRequest };
var ReposCreateUsingTemplateResponse = /** @class */ (function (_super) {
    __extends(ReposCreateUsingTemplateResponse, _super);
    function ReposCreateUsingTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReposCreateUsingTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReposCreateUsingTemplateResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReposCreateUsingTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Repository)
    ], ReposCreateUsingTemplateResponse.prototype, "repository", void 0);
    return ReposCreateUsingTemplateResponse;
}(SpeakeasyBase));
export { ReposCreateUsingTemplateResponse };
