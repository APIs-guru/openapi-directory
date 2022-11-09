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
var ContentSearchContentWithTextPathParams = /** @class */ (function (_super) {
    __extends(ContentSearchContentWithTextPathParams, _super);
    function ContentSearchContentWithTextPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=locale" }),
        __metadata("design:type", String)
    ], ContentSearchContentWithTextPathParams.prototype, "locale", void 0);
    return ContentSearchContentWithTextPathParams;
}(SpeakeasyBase));
export { ContentSearchContentWithTextPathParams };
var ContentSearchContentWithTextQueryParams = /** @class */ (function (_super) {
    __extends(ContentSearchContentWithTextQueryParams, _super);
    function ContentSearchContentWithTextQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ctype" }),
        __metadata("design:type", String)
    ], ContentSearchContentWithTextQueryParams.prototype, "ctype", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" }),
        __metadata("design:type", Number)
    ], ContentSearchContentWithTextQueryParams.prototype, "currentpage", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=head" }),
        __metadata("design:type", Boolean)
    ], ContentSearchContentWithTextQueryParams.prototype, "head", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=searchtext" }),
        __metadata("design:type", String)
    ], ContentSearchContentWithTextQueryParams.prototype, "searchtext", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], ContentSearchContentWithTextQueryParams.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], ContentSearchContentWithTextQueryParams.prototype, "tag", void 0);
    return ContentSearchContentWithTextQueryParams;
}(SpeakeasyBase));
export { ContentSearchContentWithTextQueryParams };
var ContentSearchContentWithTextRequest = /** @class */ (function (_super) {
    __extends(ContentSearchContentWithTextRequest, _super);
    function ContentSearchContentWithTextRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ContentSearchContentWithTextPathParams)
    ], ContentSearchContentWithTextRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ContentSearchContentWithTextQueryParams)
    ], ContentSearchContentWithTextRequest.prototype, "queryParams", void 0);
    return ContentSearchContentWithTextRequest;
}(SpeakeasyBase));
export { ContentSearchContentWithTextRequest };
var ContentSearchContentWithTextResponse = /** @class */ (function (_super) {
    __extends(ContentSearchContentWithTextResponse, _super);
    function ContentSearchContentWithTextResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ContentSearchContentWithTextResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ContentSearchContentWithTextResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ContentSearchContentWithTextResponse.prototype, "statusCode", void 0);
    return ContentSearchContentWithTextResponse;
}(SpeakeasyBase));
export { ContentSearchContentWithTextResponse };
