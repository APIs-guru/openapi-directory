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
var DeleteCustomFieldPathParams = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldPathParams, _super);
    function DeleteCustomFieldPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_gid" }),
        __metadata("design:type", String)
    ], DeleteCustomFieldPathParams.prototype, "customFieldGid", void 0);
    return DeleteCustomFieldPathParams;
}(SpeakeasyBase));
export { DeleteCustomFieldPathParams };
var DeleteCustomFieldQueryParams = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldQueryParams, _super);
    function DeleteCustomFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DeleteCustomFieldQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DeleteCustomFieldQueryParams.prototype, "optPretty", void 0);
    return DeleteCustomFieldQueryParams;
}(SpeakeasyBase));
export { DeleteCustomFieldQueryParams };
var DeleteCustomField200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteCustomField200ApplicationJson, _super);
    function DeleteCustomField200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteCustomField200ApplicationJson.prototype, "data", void 0);
    return DeleteCustomField200ApplicationJson;
}(SpeakeasyBase));
export { DeleteCustomField200ApplicationJson };
var DeleteCustomFieldRequest = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldRequest, _super);
    function DeleteCustomFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomFieldPathParams)
    ], DeleteCustomFieldRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomFieldQueryParams)
    ], DeleteCustomFieldRequest.prototype, "queryParams", void 0);
    return DeleteCustomFieldRequest;
}(SpeakeasyBase));
export { DeleteCustomFieldRequest };
var DeleteCustomFieldResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldResponse, _super);
    function DeleteCustomFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomFieldResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeleteCustomFieldResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCustomFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomField200ApplicationJson)
    ], DeleteCustomFieldResponse.prototype, "deleteCustomField200ApplicationJsonObject", void 0);
    return DeleteCustomFieldResponse;
}(SpeakeasyBase));
export { DeleteCustomFieldResponse };
