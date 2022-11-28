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
var UpdateTagPathParams = /** @class */ (function (_super) {
    __extends(UpdateTagPathParams, _super);
    function UpdateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag_gid" }),
        __metadata("design:type", String)
    ], UpdateTagPathParams.prototype, "tagGid", void 0);
    return UpdateTagPathParams;
}(SpeakeasyBase));
export { UpdateTagPathParams };
var UpdateTagQueryParams = /** @class */ (function (_super) {
    __extends(UpdateTagQueryParams, _super);
    function UpdateTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], UpdateTagQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], UpdateTagQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], UpdateTagQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], UpdateTagQueryParams.prototype, "optPretty", void 0);
    return UpdateTagQueryParams;
}(SpeakeasyBase));
export { UpdateTagQueryParams };
var UpdateTag200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateTag200ApplicationJson, _super);
    function UpdateTag200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.TagResponse)
    ], UpdateTag200ApplicationJson.prototype, "data", void 0);
    return UpdateTag200ApplicationJson;
}(SpeakeasyBase));
export { UpdateTag200ApplicationJson };
var UpdateTagRequest = /** @class */ (function (_super) {
    __extends(UpdateTagRequest, _super);
    function UpdateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTagPathParams)
    ], UpdateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTagQueryParams)
    ], UpdateTagRequest.prototype, "queryParams", void 0);
    return UpdateTagRequest;
}(SpeakeasyBase));
export { UpdateTagRequest };
var UpdateTagResponse = /** @class */ (function (_super) {
    __extends(UpdateTagResponse, _super);
    function UpdateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], UpdateTagResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateTag200ApplicationJson)
    ], UpdateTagResponse.prototype, "updateTag200ApplicationJsonObject", void 0);
    return UpdateTagResponse;
}(SpeakeasyBase));
export { UpdateTagResponse };
