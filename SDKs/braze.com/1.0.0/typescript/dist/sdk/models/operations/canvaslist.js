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
var CanvasListQueryParams = /** @class */ (function (_super) {
    __extends(CanvasListQueryParams, _super);
    function CanvasListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_archived" }),
        __metadata("design:type", String)
    ], CanvasListQueryParams.prototype, "includeArchived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_edit.time[gt]" }),
        __metadata("design:type", String)
    ], CanvasListQueryParams.prototype, "lastEditTimeGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", String)
    ], CanvasListQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" }),
        __metadata("design:type", String)
    ], CanvasListQueryParams.prototype, "sortDirection", void 0);
    return CanvasListQueryParams;
}(SpeakeasyBase));
export { CanvasListQueryParams };
var CanvasListRequest = /** @class */ (function (_super) {
    __extends(CanvasListRequest, _super);
    function CanvasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CanvasListQueryParams)
    ], CanvasListRequest.prototype, "queryParams", void 0);
    return CanvasListRequest;
}(SpeakeasyBase));
export { CanvasListRequest };
var CanvasListResponse = /** @class */ (function (_super) {
    __extends(CanvasListResponse, _super);
    function CanvasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CanvasListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CanvasListResponse.prototype, "statusCode", void 0);
    return CanvasListResponse;
}(SpeakeasyBase));
export { CanvasListResponse };
