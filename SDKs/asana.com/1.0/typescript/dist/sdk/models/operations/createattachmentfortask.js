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
var CreateAttachmentForTaskPathParams = /** @class */ (function (_super) {
    __extends(CreateAttachmentForTaskPathParams, _super);
    function CreateAttachmentForTaskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_gid" }),
        __metadata("design:type", String)
    ], CreateAttachmentForTaskPathParams.prototype, "taskGid", void 0);
    return CreateAttachmentForTaskPathParams;
}(SpeakeasyBase));
export { CreateAttachmentForTaskPathParams };
var CreateAttachmentForTaskQueryParams = /** @class */ (function (_super) {
    __extends(CreateAttachmentForTaskQueryParams, _super);
    function CreateAttachmentForTaskQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], CreateAttachmentForTaskQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], CreateAttachmentForTaskQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateAttachmentForTaskQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateAttachmentForTaskQueryParams.prototype, "optPretty", void 0);
    return CreateAttachmentForTaskQueryParams;
}(SpeakeasyBase));
export { CreateAttachmentForTaskQueryParams };
var CreateAttachmentForTask200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateAttachmentForTask200ApplicationJson, _super);
    function CreateAttachmentForTask200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.AttachmentResponse)
    ], CreateAttachmentForTask200ApplicationJson.prototype, "data", void 0);
    return CreateAttachmentForTask200ApplicationJson;
}(SpeakeasyBase));
export { CreateAttachmentForTask200ApplicationJson };
var CreateAttachmentForTaskRequest = /** @class */ (function (_super) {
    __extends(CreateAttachmentForTaskRequest, _super);
    function CreateAttachmentForTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAttachmentForTaskPathParams)
    ], CreateAttachmentForTaskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAttachmentForTaskQueryParams)
    ], CreateAttachmentForTaskRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", shared.AttachmentRequest)
    ], CreateAttachmentForTaskRequest.prototype, "request", void 0);
    return CreateAttachmentForTaskRequest;
}(SpeakeasyBase));
export { CreateAttachmentForTaskRequest };
var CreateAttachmentForTaskResponse = /** @class */ (function (_super) {
    __extends(CreateAttachmentForTaskResponse, _super);
    function CreateAttachmentForTaskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAttachmentForTaskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateAttachmentForTaskResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAttachmentForTaskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAttachmentForTask200ApplicationJson)
    ], CreateAttachmentForTaskResponse.prototype, "createAttachmentForTask200ApplicationJsonObject", void 0);
    return CreateAttachmentForTaskResponse;
}(SpeakeasyBase));
export { CreateAttachmentForTaskResponse };
