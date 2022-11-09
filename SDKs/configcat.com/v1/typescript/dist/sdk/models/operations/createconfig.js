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
var CreateConfigPathParams = /** @class */ (function (_super) {
    __extends(CreateConfigPathParams, _super);
    function CreateConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=productId" }),
        __metadata("design:type", String)
    ], CreateConfigPathParams.prototype, "productId", void 0);
    return CreateConfigPathParams;
}(SpeakeasyBase));
export { CreateConfigPathParams };
var CreateConfigRequests = /** @class */ (function (_super) {
    __extends(CreateConfigRequests, _super);
    function CreateConfigRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.CreateConfigRequest)
    ], CreateConfigRequests.prototype, "createConfigRequest", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateConfigRequest)
    ], CreateConfigRequests.prototype, "createConfigRequest1", void 0);
    __decorate([
        Metadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.CreateConfigRequest)
    ], CreateConfigRequests.prototype, "createConfigRequest2", void 0);
    return CreateConfigRequests;
}(SpeakeasyBase));
export { CreateConfigRequests };
var CreateConfigRequest = /** @class */ (function (_super) {
    __extends(CreateConfigRequest, _super);
    function CreateConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConfigPathParams)
    ], CreateConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateConfigRequests)
    ], CreateConfigRequest.prototype, "request", void 0);
    return CreateConfigRequest;
}(SpeakeasyBase));
export { CreateConfigRequest };
var CreateConfigResponse = /** @class */ (function (_super) {
    __extends(CreateConfigResponse, _super);
    function CreateConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConfigModel)
    ], CreateConfigResponse.prototype, "configModel", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ConfigModelHaljson)
    ], CreateConfigResponse.prototype, "configModelHaljson", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateConfigResponse.prototype, "statusCode", void 0);
    return CreateConfigResponse;
}(SpeakeasyBase));
export { CreateConfigResponse };
