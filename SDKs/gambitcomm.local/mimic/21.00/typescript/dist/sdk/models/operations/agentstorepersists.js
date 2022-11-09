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
var AgentStorePersistsPathParams = /** @class */ (function (_super) {
    __extends(AgentStorePersistsPathParams, _super);
    function AgentStorePersistsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], AgentStorePersistsPathParams.prototype, "agentNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=var" }),
        __metadata("design:type", String)
    ], AgentStorePersistsPathParams.prototype, "var", void 0);
    return AgentStorePersistsPathParams;
}(SpeakeasyBase));
export { AgentStorePersistsPathParams };
var AgentStorePersistsRequest = /** @class */ (function (_super) {
    __extends(AgentStorePersistsRequest, _super);
    function AgentStorePersistsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AgentStorePersistsPathParams)
    ], AgentStorePersistsRequest.prototype, "pathParams", void 0);
    return AgentStorePersistsRequest;
}(SpeakeasyBase));
export { AgentStorePersistsRequest };
var AgentStorePersistsResponse = /** @class */ (function (_super) {
    __extends(AgentStorePersistsResponse, _super);
    function AgentStorePersistsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AgentStorePersistsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AgentStorePersistsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AgentStorePersistsResponse.prototype, "agentStorePersists200ApplicationJsonString", void 0);
    return AgentStorePersistsResponse;
}(SpeakeasyBase));
export { AgentStorePersistsResponse };
