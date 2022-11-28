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
var CreateProjectQueryParams = /** @class */ (function (_super) {
    __extends(CreateProjectQueryParams, _super);
    function CreateProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], CreateProjectQueryParams.prototype, "optFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], CreateProjectQueryParams.prototype, "optPretty", void 0);
    return CreateProjectQueryParams;
}(SpeakeasyBase));
export { CreateProjectQueryParams };
var CreateProjectRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateProjectRequestBodyInput, _super);
    function CreateProjectRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectRequestInput)
    ], CreateProjectRequestBodyInput.prototype, "data", void 0);
    return CreateProjectRequestBodyInput;
}(SpeakeasyBase));
export { CreateProjectRequestBodyInput };
var CreateProject201ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateProject201ApplicationJson, _super);
    function CreateProject201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", shared.ProjectResponse)
    ], CreateProject201ApplicationJson.prototype, "data", void 0);
    return CreateProject201ApplicationJson;
}(SpeakeasyBase));
export { CreateProject201ApplicationJson };
var CreateProjectRequest = /** @class */ (function (_super) {
    __extends(CreateProjectRequest, _super);
    function CreateProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProjectQueryParams)
    ], CreateProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateProjectRequestBodyInput)
    ], CreateProjectRequest.prototype, "request", void 0);
    return CreateProjectRequest;
}(SpeakeasyBase));
export { CreateProjectRequest };
var CreateProjectResponse = /** @class */ (function (_super) {
    __extends(CreateProjectResponse, _super);
    function CreateProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], CreateProjectResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateProject201ApplicationJson)
    ], CreateProjectResponse.prototype, "createProject201ApplicationJsonObject", void 0);
    return CreateProjectResponse;
}(SpeakeasyBase));
export { CreateProjectResponse };
