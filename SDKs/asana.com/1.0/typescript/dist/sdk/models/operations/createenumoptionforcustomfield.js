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
var CreateEnumOptionForCustomFieldPathParams = /** @class */ (function (_super) {
    __extends(CreateEnumOptionForCustomFieldPathParams, _super);
    function CreateEnumOptionForCustomFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" }),
        __metadata("design:type", String)
    ], CreateEnumOptionForCustomFieldPathParams.prototype, "customFieldGid", void 0);
    return CreateEnumOptionForCustomFieldPathParams;
}(SpeakeasyBase));
export { CreateEnumOptionForCustomFieldPathParams };
var CreateEnumOptionForCustomFieldQueryParams = /** @class */ (function (_super) {
    __extends(CreateEnumOptionForCustomFieldQueryParams, _super);
    function CreateEnumOptionForCustomFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CreateEnumOptionForCustomFieldQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], CreateEnumOptionForCustomFieldQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateEnumOptionForCustomFieldQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateEnumOptionForCustomFieldQueryParams.prototype, "optPretty", void 0);
    return CreateEnumOptionForCustomFieldQueryParams;
}(SpeakeasyBase));
export { CreateEnumOptionForCustomFieldQueryParams };
var CreateEnumOptionForCustomFieldRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateEnumOptionForCustomFieldRequestBodyInput, _super);
    function CreateEnumOptionForCustomFieldRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.EnumOptionRequestInput)
    ], CreateEnumOptionForCustomFieldRequestBodyInput.prototype, "data", void 0);
    return CreateEnumOptionForCustomFieldRequestBodyInput;
}(SpeakeasyBase));
export { CreateEnumOptionForCustomFieldRequestBodyInput };
var CreateEnumOptionForCustomField201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateEnumOptionForCustomField201ApplicationJson, _super);
    function CreateEnumOptionForCustomField201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.EnumOption)
    ], CreateEnumOptionForCustomField201ApplicationJson.prototype, "data", void 0);
    return CreateEnumOptionForCustomField201ApplicationJson;
}(SpeakeasyBase));
export { CreateEnumOptionForCustomField201ApplicationJson };
var CreateEnumOptionForCustomFieldRequest = /** @class */ (function (_super) {
    __extends(CreateEnumOptionForCustomFieldRequest, _super);
    function CreateEnumOptionForCustomFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnumOptionForCustomFieldPathParams)
    ], CreateEnumOptionForCustomFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnumOptionForCustomFieldQueryParams)
    ], CreateEnumOptionForCustomFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateEnumOptionForCustomFieldRequestBodyInput)
    ], CreateEnumOptionForCustomFieldRequest.prototype, "request", void 0);
    return CreateEnumOptionForCustomFieldRequest;
}(SpeakeasyBase));
export { CreateEnumOptionForCustomFieldRequest };
var CreateEnumOptionForCustomFieldResponse = /** @class */ (function (_super) {
    __extends(CreateEnumOptionForCustomFieldResponse, _super);
    function CreateEnumOptionForCustomFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateEnumOptionForCustomFieldResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateEnumOptionForCustomFieldResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateEnumOptionForCustomFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateEnumOptionForCustomField201ApplicationJson)
    ], CreateEnumOptionForCustomFieldResponse.prototype, "createEnumOptionForCustomField201ApplicationJsonObject", void 0);
    return CreateEnumOptionForCustomFieldResponse;
}(SpeakeasyBase));
export { CreateEnumOptionForCustomFieldResponse };
