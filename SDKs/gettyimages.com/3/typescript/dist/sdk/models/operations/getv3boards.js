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
import * as shared from "../shared";
var GetV3BoardsQueryParams = /** @class */ (function (_super) {
    __extends(GetV3BoardsQueryParams, _super);
    function GetV3BoardsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=board_relationship" }),
        __metadata("design:type", String)
    ], GetV3BoardsQueryParams.prototype, "boardRelationship", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetV3BoardsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetV3BoardsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" }),
        __metadata("design:type", String)
    ], GetV3BoardsQueryParams.prototype, "sortOrder", void 0);
    return GetV3BoardsQueryParams;
}(SpeakeasyBase));
export { GetV3BoardsQueryParams };
var GetV3BoardsRequest = /** @class */ (function (_super) {
    __extends(GetV3BoardsRequest, _super);
    function GetV3BoardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV3BoardsQueryParams)
    ], GetV3BoardsRequest.prototype, "queryParams", void 0);
    return GetV3BoardsRequest;
}(SpeakeasyBase));
export { GetV3BoardsRequest };
var GetV3BoardsResponse = /** @class */ (function (_super) {
    __extends(GetV3BoardsResponse, _super);
    function GetV3BoardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BoardList)
    ], GetV3BoardsResponse.prototype, "boardList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV3BoardsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV3BoardsResponse.prototype, "statusCode", void 0);
    return GetV3BoardsResponse;
}(SpeakeasyBase));
export { GetV3BoardsResponse };
