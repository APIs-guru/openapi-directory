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
var AgentStoreLreplacePathParams = /** @class */ (function (_super) {
    __extends(AgentStoreLreplacePathParams, _super);
    function AgentStoreLreplacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], AgentStoreLreplacePathParams.prototype, "agentNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" }),
        __metadata("design:type", Number)
    ], AgentStoreLreplacePathParams.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=var" }),
        __metadata("design:type", String)
    ], AgentStoreLreplacePathParams.prototype, "var", void 0);
    return AgentStoreLreplacePathParams;
}(SpeakeasyBase));
export { AgentStoreLreplacePathParams };
var AgentStoreLreplaceRequest = /** @class */ (function (_super) {
    __extends(AgentStoreLreplaceRequest, _super);
    function AgentStoreLreplaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AgentStoreLreplacePathParams)
    ], AgentStoreLreplaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", String)
    ], AgentStoreLreplaceRequest.prototype, "request", void 0);
    return AgentStoreLreplaceRequest;
}(SpeakeasyBase));
export { AgentStoreLreplaceRequest };
var AgentStoreLreplaceResponse = /** @class */ (function (_super) {
    __extends(AgentStoreLreplaceResponse, _super);
    function AgentStoreLreplaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AgentStoreLreplaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AgentStoreLreplaceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AgentStoreLreplaceResponse.prototype, "agentStoreLreplace200ApplicationJsonString", void 0);
    return AgentStoreLreplaceResponse;
}(SpeakeasyBase));
export { AgentStoreLreplaceResponse };
