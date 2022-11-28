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
var FolderListForPathPathParams = /** @class */ (function (_super) {
    __extends(FolderListForPathPathParams, _super);
    function FolderListForPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" }),
        __metadata("design:type", String)
    ], FolderListForPathPathParams.prototype, "path", void 0);
    return FolderListForPathPathParams;
}(SpeakeasyBase));
export { FolderListForPathPathParams };
var FolderListForPathQueryParams = /** @class */ (function (_super) {
    __extends(FolderListForPathQueryParams, _super);
    function FolderListForPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], FolderListForPathQueryParams.prototype, "cursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], FolderListForPathQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], FolderListForPathQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preview_size" }),
        __metadata("design:type", String)
    ], FolderListForPathQueryParams.prototype, "previewSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], FolderListForPathQueryParams.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_all" }),
        __metadata("design:type", Boolean)
    ], FolderListForPathQueryParams.prototype, "searchAll", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_previews" }),
        __metadata("design:type", Boolean)
    ], FolderListForPathQueryParams.prototype, "withPreviews", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=with_priority_color" }),
        __metadata("design:type", Boolean)
    ], FolderListForPathQueryParams.prototype, "withPriorityColor", void 0);
    return FolderListForPathQueryParams;
}(SpeakeasyBase));
export { FolderListForPathQueryParams };
var FolderListForPathRequest = /** @class */ (function (_super) {
    __extends(FolderListForPathRequest, _super);
    function FolderListForPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FolderListForPathPathParams)
    ], FolderListForPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FolderListForPathQueryParams)
    ], FolderListForPathRequest.prototype, "queryParams", void 0);
    return FolderListForPathRequest;
}(SpeakeasyBase));
export { FolderListForPathRequest };
var FolderListForPathResponse = /** @class */ (function (_super) {
    __extends(FolderListForPathResponse, _super);
    function FolderListForPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FolderListForPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.FileEntity }),
        __metadata("design:type", Array)
    ], FolderListForPathResponse.prototype, "fileEntities", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FolderListForPathResponse.prototype, "statusCode", void 0);
    return FolderListForPathResponse;
}(SpeakeasyBase));
export { FolderListForPathResponse };
