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
var CreateCustomFieldQueryParams = /** @class */ (function (_super) {
    __extends(CreateCustomFieldQueryParams, _super);
    function CreateCustomFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CreateCustomFieldQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], CreateCustomFieldQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateCustomFieldQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateCustomFieldQueryParams.prototype, "optPretty", void 0);
    return CreateCustomFieldQueryParams;
}(SpeakeasyBase));
export { CreateCustomFieldQueryParams };
var CreateCustomFieldRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateCustomFieldRequestBodyInput, _super);
    function CreateCustomFieldRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.CustomFieldRequestInput)
    ], CreateCustomFieldRequestBodyInput.prototype, "data", void 0);
    return CreateCustomFieldRequestBodyInput;
}(SpeakeasyBase));
export { CreateCustomFieldRequestBodyInput };
var CreateCustomField201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateCustomField201ApplicationJson, _super);
    function CreateCustomField201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.CustomFieldResponse)
    ], CreateCustomField201ApplicationJson.prototype, "data", void 0);
    return CreateCustomField201ApplicationJson;
}(SpeakeasyBase));
export { CreateCustomField201ApplicationJson };
var CreateCustomFieldRequest = /** @class */ (function (_super) {
    __extends(CreateCustomFieldRequest, _super);
    function CreateCustomFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomFieldQueryParams)
    ], CreateCustomFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateCustomFieldRequestBodyInput)
    ], CreateCustomFieldRequest.prototype, "request", void 0);
    return CreateCustomFieldRequest;
}(SpeakeasyBase));
export { CreateCustomFieldRequest };
var CreateCustomFieldResponse = /** @class */ (function (_super) {
    __extends(CreateCustomFieldResponse, _super);
    function CreateCustomFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateCustomFieldResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateCustomFieldResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateCustomFieldResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateCustomField201ApplicationJson)
    ], CreateCustomFieldResponse.prototype, "createCustomField201ApplicationJsonObject", void 0);
    return CreateCustomFieldResponse;
}(SpeakeasyBase));
export { CreateCustomFieldResponse };
