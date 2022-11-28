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
var CreateOrganizationExportQueryParams = /** @class */ (function (_super) {
    __extends(CreateOrganizationExportQueryParams, _super);
    function CreateOrganizationExportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CreateOrganizationExportQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], CreateOrganizationExportQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateOrganizationExportQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateOrganizationExportQueryParams.prototype, "optPretty", void 0);
    return CreateOrganizationExportQueryParams;
}(SpeakeasyBase));
export { CreateOrganizationExportQueryParams };
var CreateOrganizationExportRequestBody = /** @class */ (function (_super) {
    __extends(CreateOrganizationExportRequestBody, _super);
    function CreateOrganizationExportRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.OrganizationExportRequest)
    ], CreateOrganizationExportRequestBody.prototype, "data", void 0);
    return CreateOrganizationExportRequestBody;
}(SpeakeasyBase));
export { CreateOrganizationExportRequestBody };
var CreateOrganizationExport201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateOrganizationExport201ApplicationJson, _super);
    function CreateOrganizationExport201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.OrganizationExportResponse)
    ], CreateOrganizationExport201ApplicationJson.prototype, "data", void 0);
    return CreateOrganizationExport201ApplicationJson;
}(SpeakeasyBase));
export { CreateOrganizationExport201ApplicationJson };
var CreateOrganizationExportRequest = /** @class */ (function (_super) {
    __extends(CreateOrganizationExportRequest, _super);
    function CreateOrganizationExportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationExportQueryParams)
    ], CreateOrganizationExportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateOrganizationExportRequestBody)
    ], CreateOrganizationExportRequest.prototype, "request", void 0);
    return CreateOrganizationExportRequest;
}(SpeakeasyBase));
export { CreateOrganizationExportRequest };
var CreateOrganizationExportResponse = /** @class */ (function (_super) {
    __extends(CreateOrganizationExportResponse, _super);
    function CreateOrganizationExportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateOrganizationExportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateOrganizationExportResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateOrganizationExportResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateOrganizationExport201ApplicationJson)
    ], CreateOrganizationExportResponse.prototype, "createOrganizationExport201ApplicationJsonObject", void 0);
    return CreateOrganizationExportResponse;
}(SpeakeasyBase));
export { CreateOrganizationExportResponse };
