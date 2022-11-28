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
var GetAttachmentsForTaskPathParams = /** @class */ (function (_super) {
    __extends(GetAttachmentsForTaskPathParams, _super);
    function GetAttachmentsForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], GetAttachmentsForTaskPathParams.prototype, "taskGid", void 0);
    return GetAttachmentsForTaskPathParams;
}(SpeakeasyBase));
export { GetAttachmentsForTaskPathParams };
var GetAttachmentsForTaskQueryParams = /** @class */ (function (_super) {
    __extends(GetAttachmentsForTaskQueryParams, _super);
    function GetAttachmentsForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAttachmentsForTaskQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetAttachmentsForTaskQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetAttachmentsForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetAttachmentsForTaskQueryParams.prototype, "optPretty", void 0);
    return GetAttachmentsForTaskQueryParams;
}(SpeakeasyBase));
export { GetAttachmentsForTaskQueryParams };
var GetAttachmentsForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAttachmentsForTask200ApplicationJson, _super);
    function GetAttachmentsForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.AttachmentCompact }),
        __metadata("design:type", Array)
    ], GetAttachmentsForTask200ApplicationJson.prototype, "data", void 0);
    return GetAttachmentsForTask200ApplicationJson;
}(SpeakeasyBase));
export { GetAttachmentsForTask200ApplicationJson };
var GetAttachmentsForTaskRequest = /** @class */ (function (_super) {
    __extends(GetAttachmentsForTaskRequest, _super);
    function GetAttachmentsForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachmentsForTaskPathParams)
    ], GetAttachmentsForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachmentsForTaskQueryParams)
    ], GetAttachmentsForTaskRequest.prototype, "queryParams", void 0);
    return GetAttachmentsForTaskRequest;
}(SpeakeasyBase));
export { GetAttachmentsForTaskRequest };
var GetAttachmentsForTaskResponse = /** @class */ (function (_super) {
    __extends(GetAttachmentsForTaskResponse, _super);
    function GetAttachmentsForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAttachmentsForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetAttachmentsForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAttachmentsForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttachmentsForTask200ApplicationJson)
    ], GetAttachmentsForTaskResponse.prototype, "getAttachmentsForTask200ApplicationJsonObject", void 0);
    return GetAttachmentsForTaskResponse;
}(SpeakeasyBase));
export { GetAttachmentsForTaskResponse };
