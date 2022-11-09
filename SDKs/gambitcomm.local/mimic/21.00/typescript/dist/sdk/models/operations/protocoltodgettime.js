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
var ProtocolTodGettimePathParams = /** @class */ (function (_super) {
    __extends(ProtocolTodGettimePathParams, _super);
    function ProtocolTodGettimePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolTodGettimePathParams.prototype, "agentNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=numRetries" }),
        __metadata("design:type", Number)
    ], ProtocolTodGettimePathParams.prototype, "numRetries", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=portNum" }),
        __metadata("design:type", Number)
    ], ProtocolTodGettimePathParams.prototype, "portNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=scriptName" }),
        __metadata("design:type", String)
    ], ProtocolTodGettimePathParams.prototype, "scriptName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=serverAddr" }),
        __metadata("design:type", String)
    ], ProtocolTodGettimePathParams.prototype, "serverAddr", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=timeSec" }),
        __metadata("design:type", Number)
    ], ProtocolTodGettimePathParams.prototype, "timeSec", void 0);
    return ProtocolTodGettimePathParams;
}(SpeakeasyBase));
export { ProtocolTodGettimePathParams };
var ProtocolTodGettimeRequest = /** @class */ (function (_super) {
    __extends(ProtocolTodGettimeRequest, _super);
    function ProtocolTodGettimeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolTodGettimePathParams)
    ], ProtocolTodGettimeRequest.prototype, "pathParams", void 0);
    return ProtocolTodGettimeRequest;
}(SpeakeasyBase));
export { ProtocolTodGettimeRequest };
var ProtocolTodGettimeResponse = /** @class */ (function (_super) {
    __extends(ProtocolTodGettimeResponse, _super);
    function ProtocolTodGettimeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolTodGettimeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolTodGettimeResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ProtocolTodGettimeResponse.prototype, "protocolTodGettime200ApplicationJsonStrings", void 0);
    return ProtocolTodGettimeResponse;
}(SpeakeasyBase));
export { ProtocolTodGettimeResponse };
