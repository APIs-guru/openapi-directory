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
var InsertEnumOptionForCustomFieldPathParams = /** @class */ (function (_super) {
    __extends(InsertEnumOptionForCustomFieldPathParams, _super);
    function InsertEnumOptionForCustomFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" }),
        __metadata("design:type", String)
    ], InsertEnumOptionForCustomFieldPathParams.prototype, "customFieldGid", void 0);
    return InsertEnumOptionForCustomFieldPathParams;
}(SpeakeasyBase));
export { InsertEnumOptionForCustomFieldPathParams };
var InsertEnumOptionForCustomFieldQueryParams = /** @class */ (function (_super) {
    __extends(InsertEnumOptionForCustomFieldQueryParams, _super);
    function InsertEnumOptionForCustomFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], InsertEnumOptionForCustomFieldQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], InsertEnumOptionForCustomFieldQueryParams.prototype, "optPretty", void 0);
    return InsertEnumOptionForCustomFieldQueryParams;
}(SpeakeasyBase));
export { InsertEnumOptionForCustomFieldQueryParams };
var InsertEnumOptionForCustomFieldRequestBody = /** @class */ (function (_super) {
    __extends(InsertEnumOptionForCustomFieldRequestBody, _super);
    function InsertEnumOptionForCustomFieldRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.EnumOptionInsertRequest)
    ], InsertEnumOptionForCustomFieldRequestBody.prototype, "data", void 0);
    return InsertEnumOptionForCustomFieldRequestBody;
}(SpeakeasyBase));
export { InsertEnumOptionForCustomFieldRequestBody };
var InsertEnumOptionForCustomField200ApplicationJson = /** @class */ (function (_super) {
    __extends(InsertEnumOptionForCustomField200ApplicationJson, _super);
    function InsertEnumOptionForCustomField200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.EnumOption)
    ], InsertEnumOptionForCustomField200ApplicationJson.prototype, "data", void 0);
    return InsertEnumOptionForCustomField200ApplicationJson;
}(SpeakeasyBase));
export { InsertEnumOptionForCustomField200ApplicationJson };
var InsertEnumOptionForCustomFieldRequest = /** @class */ (function (_super) {
    __extends(InsertEnumOptionForCustomFieldRequest, _super);
    function InsertEnumOptionForCustomFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InsertEnumOptionForCustomFieldPathParams)
    ], InsertEnumOptionForCustomFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InsertEnumOptionForCustomFieldQueryParams)
    ], InsertEnumOptionForCustomFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", InsertEnumOptionForCustomFieldRequestBody)
    ], InsertEnumOptionForCustomFieldRequest.prototype, "request", void 0);
    return InsertEnumOptionForCustomFieldRequest;
}(SpeakeasyBase));
export { InsertEnumOptionForCustomFieldRequest };
var InsertEnumOptionForCustomFieldResponse = /** @class */ (function (_super) {
    __extends(InsertEnumOptionForCustomFieldResponse, _super);
    function InsertEnumOptionForCustomFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], InsertEnumOptionForCustomFieldResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], InsertEnumOptionForCustomFieldResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], InsertEnumOptionForCustomFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", InsertEnumOptionForCustomField200ApplicationJson)
    ], InsertEnumOptionForCustomFieldResponse.prototype, "insertEnumOptionForCustomField200ApplicationJsonObject", void 0);
    return InsertEnumOptionForCustomFieldResponse;
}(SpeakeasyBase));
export { InsertEnumOptionForCustomFieldResponse };
