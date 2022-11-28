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
var DeleteSectionPathParams = /** @class */ (function (_super) {
    __extends(DeleteSectionPathParams, _super);
    function DeleteSectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section_gid" }),
        __metadata("design:type", String)
    ], DeleteSectionPathParams.prototype, "sectionGid", void 0);
    return DeleteSectionPathParams;
}(SpeakeasyBase));
export { DeleteSectionPathParams };
var DeleteSectionQueryParams = /** @class */ (function (_super) {
    __extends(DeleteSectionQueryParams, _super);
    function DeleteSectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DeleteSectionQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DeleteSectionQueryParams.prototype, "optPretty", void 0);
    return DeleteSectionQueryParams;
}(SpeakeasyBase));
export { DeleteSectionQueryParams };
var DeleteSection200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteSection200ApplicationJson, _super);
    function DeleteSection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteSection200ApplicationJson.prototype, "data", void 0);
    return DeleteSection200ApplicationJson;
}(SpeakeasyBase));
export { DeleteSection200ApplicationJson };
var DeleteSectionRequest = /** @class */ (function (_super) {
    __extends(DeleteSectionRequest, _super);
    function DeleteSectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSectionPathParams)
    ], DeleteSectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSectionQueryParams)
    ], DeleteSectionRequest.prototype, "queryParams", void 0);
    return DeleteSectionRequest;
}(SpeakeasyBase));
export { DeleteSectionRequest };
var DeleteSectionResponse = /** @class */ (function (_super) {
    __extends(DeleteSectionResponse, _super);
    function DeleteSectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeleteSectionResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSection200ApplicationJson)
    ], DeleteSectionResponse.prototype, "deleteSection200ApplicationJsonObject", void 0);
    return DeleteSectionResponse;
}(SpeakeasyBase));
export { DeleteSectionResponse };
