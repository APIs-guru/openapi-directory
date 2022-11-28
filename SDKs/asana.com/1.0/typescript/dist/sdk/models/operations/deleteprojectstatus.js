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
var DeleteProjectStatusPathParams = /** @class */ (function (_super) {
    __extends(DeleteProjectStatusPathParams, _super);
    function DeleteProjectStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_status_gid" }),
        __metadata("design:type", String)
    ], DeleteProjectStatusPathParams.prototype, "projectStatusGid", void 0);
    return DeleteProjectStatusPathParams;
}(SpeakeasyBase));
export { DeleteProjectStatusPathParams };
var DeleteProjectStatusQueryParams = /** @class */ (function (_super) {
    __extends(DeleteProjectStatusQueryParams, _super);
    function DeleteProjectStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], DeleteProjectStatusQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], DeleteProjectStatusQueryParams.prototype, "optPretty", void 0);
    return DeleteProjectStatusQueryParams;
}(SpeakeasyBase));
export { DeleteProjectStatusQueryParams };
var DeleteProjectStatus200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteProjectStatus200ApplicationJson, _super);
    function DeleteProjectStatus200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], DeleteProjectStatus200ApplicationJson.prototype, "data", void 0);
    return DeleteProjectStatus200ApplicationJson;
}(SpeakeasyBase));
export { DeleteProjectStatus200ApplicationJson };
var DeleteProjectStatusRequest = /** @class */ (function (_super) {
    __extends(DeleteProjectStatusRequest, _super);
    function DeleteProjectStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProjectStatusPathParams)
    ], DeleteProjectStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProjectStatusQueryParams)
    ], DeleteProjectStatusRequest.prototype, "queryParams", void 0);
    return DeleteProjectStatusRequest;
}(SpeakeasyBase));
export { DeleteProjectStatusRequest };
var DeleteProjectStatusResponse = /** @class */ (function (_super) {
    __extends(DeleteProjectStatusResponse, _super);
    function DeleteProjectStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProjectStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], DeleteProjectStatusResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProjectStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProjectStatus200ApplicationJson)
    ], DeleteProjectStatusResponse.prototype, "deleteProjectStatus200ApplicationJsonObject", void 0);
    return DeleteProjectStatusResponse;
}(SpeakeasyBase));
export { DeleteProjectStatusResponse };
