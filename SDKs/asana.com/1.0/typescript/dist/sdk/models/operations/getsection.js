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
var GetSectionPathParams = /** @class */ (function (_super) {
    __extends(GetSectionPathParams, _super);
    function GetSectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section_gid" }),
        __metadata("design:type", String)
    ], GetSectionPathParams.prototype, "sectionGid", void 0);
    return GetSectionPathParams;
}(SpeakeasyBase));
export { GetSectionPathParams };
var GetSectionQueryParams = /** @class */ (function (_super) {
    __extends(GetSectionQueryParams, _super);
    function GetSectionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetSectionQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetSectionQueryParams.prototype, "optPretty", void 0);
    return GetSectionQueryParams;
}(SpeakeasyBase));
export { GetSectionQueryParams };
var GetSection200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSection200ApplicationJson, _super);
    function GetSection200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.SectionResponse)
    ], GetSection200ApplicationJson.prototype, "data", void 0);
    return GetSection200ApplicationJson;
}(SpeakeasyBase));
export { GetSection200ApplicationJson };
var GetSectionRequest = /** @class */ (function (_super) {
    __extends(GetSectionRequest, _super);
    function GetSectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSectionPathParams)
    ], GetSectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSectionQueryParams)
    ], GetSectionRequest.prototype, "queryParams", void 0);
    return GetSectionRequest;
}(SpeakeasyBase));
export { GetSectionRequest };
var GetSectionResponse = /** @class */ (function (_super) {
    __extends(GetSectionResponse, _super);
    function GetSectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetSectionResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSectionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSection200ApplicationJson)
    ], GetSectionResponse.prototype, "getSection200ApplicationJsonObject", void 0);
    return GetSectionResponse;
}(SpeakeasyBase));
export { GetSectionResponse };
