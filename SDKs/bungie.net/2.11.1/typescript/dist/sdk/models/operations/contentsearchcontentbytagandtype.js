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
var ContentSearchContentByTagAndTypePathParams = /** @class */ (function (_super) {
    __extends(ContentSearchContentByTagAndTypePathParams, _super);
    function ContentSearchContentByTagAndTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locale" }),
        __metadata("design:type", String)
    ], ContentSearchContentByTagAndTypePathParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" }),
        __metadata("design:type", String)
    ], ContentSearchContentByTagAndTypePathParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], ContentSearchContentByTagAndTypePathParams.prototype, "type", void 0);
    return ContentSearchContentByTagAndTypePathParams;
}(SpeakeasyBase));
export { ContentSearchContentByTagAndTypePathParams };
var ContentSearchContentByTagAndTypeQueryParams = /** @class */ (function (_super) {
    __extends(ContentSearchContentByTagAndTypeQueryParams, _super);
    function ContentSearchContentByTagAndTypeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" }),
        __metadata("design:type", Number)
    ], ContentSearchContentByTagAndTypeQueryParams.prototype, "currentpage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" }),
        __metadata("design:type", Boolean)
    ], ContentSearchContentByTagAndTypeQueryParams.prototype, "head", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=itemsperpage" }),
        __metadata("design:type", Number)
    ], ContentSearchContentByTagAndTypeQueryParams.prototype, "itemsperpage", void 0);
    return ContentSearchContentByTagAndTypeQueryParams;
}(SpeakeasyBase));
export { ContentSearchContentByTagAndTypeQueryParams };
var ContentSearchContentByTagAndTypeRequest = /** @class */ (function (_super) {
    __extends(ContentSearchContentByTagAndTypeRequest, _super);
    function ContentSearchContentByTagAndTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSearchContentByTagAndTypePathParams)
    ], ContentSearchContentByTagAndTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentSearchContentByTagAndTypeQueryParams)
    ], ContentSearchContentByTagAndTypeRequest.prototype, "queryParams", void 0);
    return ContentSearchContentByTagAndTypeRequest;
}(SpeakeasyBase));
export { ContentSearchContentByTagAndTypeRequest };
var ContentSearchContentByTagAndTypeResponse = /** @class */ (function (_super) {
    __extends(ContentSearchContentByTagAndTypeResponse, _super);
    function ContentSearchContentByTagAndTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ContentSearchContentByTagAndTypeResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentSearchContentByTagAndTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentSearchContentByTagAndTypeResponse.prototype, "statusCode", void 0);
    return ContentSearchContentByTagAndTypeResponse;
}(SpeakeasyBase));
export { ContentSearchContentByTagAndTypeResponse };
