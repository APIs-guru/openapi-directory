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
var DelTimerScriptPathParams = /** @class */ (function (_super) {
    __extends(DelTimerScriptPathParams, _super);
    function DelTimerScriptPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], DelTimerScriptPathParams.prototype, "agentNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=arg" }),
        __metadata("design:type", String)
    ], DelTimerScriptPathParams.prototype, "arg", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=interval" }),
        __metadata("design:type", Number)
    ], DelTimerScriptPathParams.prototype, "interval", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=script" }),
        __metadata("design:type", String)
    ], DelTimerScriptPathParams.prototype, "script", void 0);
    return DelTimerScriptPathParams;
}(SpeakeasyBase));
export { DelTimerScriptPathParams };
var DelTimerScriptRequest = /** @class */ (function (_super) {
    __extends(DelTimerScriptRequest, _super);
    function DelTimerScriptRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DelTimerScriptPathParams)
    ], DelTimerScriptRequest.prototype, "pathParams", void 0);
    return DelTimerScriptRequest;
}(SpeakeasyBase));
export { DelTimerScriptRequest };
var DelTimerScriptResponse = /** @class */ (function (_super) {
    __extends(DelTimerScriptResponse, _super);
    function DelTimerScriptResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DelTimerScriptResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DelTimerScriptResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DelTimerScriptResponse.prototype, "delTimerScript200ApplicationJsonString", void 0);
    return DelTimerScriptResponse;
}(SpeakeasyBase));
export { DelTimerScriptResponse };
