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
export var CreateBatchRequestBodyOperationEnum;
(function (CreateBatchRequestBodyOperationEnum) {
    CreateBatchRequestBodyOperationEnum["Whois"] = "whois";
    CreateBatchRequestBodyOperationEnum["Check"] = "check";
})(CreateBatchRequestBodyOperationEnum || (CreateBatchRequestBodyOperationEnum = {}));
export var CreateBatchRequestBodyOptionsFormatEnum;
(function (CreateBatchRequestBodyOptionsFormatEnum) {
    CreateBatchRequestBodyOptionsFormatEnum["Raw"] = "raw";
    CreateBatchRequestBodyOptionsFormatEnum["Formatted"] = "formatted";
    CreateBatchRequestBodyOptionsFormatEnum["Json"] = "json";
})(CreateBatchRequestBodyOptionsFormatEnum || (CreateBatchRequestBodyOptionsFormatEnum = {}));
var CreateBatchRequestBodyOptions = /** @class */ (function (_super) {
    __extends(CreateBatchRequestBodyOptions, _super);
    function CreateBatchRequestBodyOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], CreateBatchRequestBodyOptions.prototype, "format", void 0);
    return CreateBatchRequestBodyOptions;
}(SpeakeasyBase));
export { CreateBatchRequestBodyOptions };
var CreateBatchRequestBody = /** @class */ (function (_super) {
    __extends(CreateBatchRequestBody, _super);
    function CreateBatchRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=domains" }),
        __metadata("design:type", Array)
    ], CreateBatchRequestBody.prototype, "domains", void 0);
    __decorate([
        Metadata({ data: "json, name=operation" }),
        __metadata("design:type", String)
    ], CreateBatchRequestBody.prototype, "operation", void 0);
    __decorate([
        Metadata({ data: "json, name=options" }),
        __metadata("design:type", CreateBatchRequestBodyOptions)
    ], CreateBatchRequestBody.prototype, "options", void 0);
    return CreateBatchRequestBody;
}(SpeakeasyBase));
export { CreateBatchRequestBody };
var CreateBatchRequest = /** @class */ (function (_super) {
    __extends(CreateBatchRequest, _super);
    function CreateBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBatchRequestBody)
    ], CreateBatchRequest.prototype, "request", void 0);
    return CreateBatchRequest;
}(SpeakeasyBase));
export { CreateBatchRequest };
var CreateBatchResponse = /** @class */ (function (_super) {
    __extends(CreateBatchResponse, _super);
    function CreateBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Object)
    ], CreateBatchResponse.prototype, "batch", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateBatchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateBatchResponse.prototype, "statusCode", void 0);
    return CreateBatchResponse;
}(SpeakeasyBase));
export { CreateBatchResponse };
