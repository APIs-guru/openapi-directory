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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var ContentGetContentByTagAndTypePathParams = /** @class */ (function (_super) {
    __extends(ContentGetContentByTagAndTypePathParams, _super);
    function ContentGetContentByTagAndTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=locale" }),
        __metadata("design:type", String)
    ], ContentGetContentByTagAndTypePathParams.prototype, "locale", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tag" }),
        __metadata("design:type", String)
    ], ContentGetContentByTagAndTypePathParams.prototype, "tag", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], ContentGetContentByTagAndTypePathParams.prototype, "type", void 0);
    return ContentGetContentByTagAndTypePathParams;
}(SpeakeasyBase));
export { ContentGetContentByTagAndTypePathParams };
var ContentGetContentByTagAndTypeQueryParams = /** @class */ (function (_super) {
    __extends(ContentGetContentByTagAndTypeQueryParams, _super);
    function ContentGetContentByTagAndTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=head" }),
        __metadata("design:type", Boolean)
    ], ContentGetContentByTagAndTypeQueryParams.prototype, "head", void 0);
    return ContentGetContentByTagAndTypeQueryParams;
}(SpeakeasyBase));
export { ContentGetContentByTagAndTypeQueryParams };
var ContentGetContentByTagAndTypeRequest = /** @class */ (function (_super) {
    __extends(ContentGetContentByTagAndTypeRequest, _super);
    function ContentGetContentByTagAndTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ContentGetContentByTagAndTypePathParams)
    ], ContentGetContentByTagAndTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ContentGetContentByTagAndTypeQueryParams)
    ], ContentGetContentByTagAndTypeRequest.prototype, "queryParams", void 0);
    return ContentGetContentByTagAndTypeRequest;
}(SpeakeasyBase));
export { ContentGetContentByTagAndTypeRequest };
var ContentGetContentByTagAndTypeResponse = /** @class */ (function (_super) {
    __extends(ContentGetContentByTagAndTypeResponse, _super);
    function ContentGetContentByTagAndTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ContentGetContentByTagAndTypeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ContentGetContentByTagAndTypeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ContentGetContentByTagAndTypeResponse.prototype, "statusCode", void 0);
    return ContentGetContentByTagAndTypeResponse;
}(SpeakeasyBase));
export { ContentGetContentByTagAndTypeResponse };
