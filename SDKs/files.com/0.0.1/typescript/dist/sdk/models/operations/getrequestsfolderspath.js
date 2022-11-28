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
var GetRequestsFoldersPathPathParams = /** @class */ (function (_super) {
    __extends(GetRequestsFoldersPathPathParams, _super);
    function GetRequestsFoldersPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], GetRequestsFoldersPathPathParams.prototype, "path", void 0);
    return GetRequestsFoldersPathPathParams;
}(SpeakeasyBase));
export { GetRequestsFoldersPathPathParams };
var GetRequestsFoldersPathQueryParams = /** @class */ (function (_super) {
    __extends(GetRequestsFoldersPathQueryParams, _super);
    function GetRequestsFoldersPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], GetRequestsFoldersPathQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" }),
        __metadata("design:type", Boolean)
    ], GetRequestsFoldersPathQueryParams.prototype, "mine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetRequestsFoldersPathQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" }),
        __metadata("design:type", Map)
    ], GetRequestsFoldersPathQueryParams.prototype, "sortBy", void 0);
    return GetRequestsFoldersPathQueryParams;
}(SpeakeasyBase));
export { GetRequestsFoldersPathQueryParams };
var GetRequestsFoldersPathRequest = /** @class */ (function (_super) {
    __extends(GetRequestsFoldersPathRequest, _super);
    function GetRequestsFoldersPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRequestsFoldersPathPathParams)
    ], GetRequestsFoldersPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRequestsFoldersPathQueryParams)
    ], GetRequestsFoldersPathRequest.prototype, "queryParams", void 0);
    return GetRequestsFoldersPathRequest;
}(SpeakeasyBase));
export { GetRequestsFoldersPathRequest };
var GetRequestsFoldersPathResponse = /** @class */ (function (_super) {
    __extends(GetRequestsFoldersPathResponse, _super);
    function GetRequestsFoldersPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRequestsFoldersPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RequestEntity }),
        __metadata("design:type", Array)
    ], GetRequestsFoldersPathResponse.prototype, "requestEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRequestsFoldersPathResponse.prototype, "statusCode", void 0);
    return GetRequestsFoldersPathResponse;
}(SpeakeasyBase));
export { GetRequestsFoldersPathResponse };
