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
var ProtocolNetflowChangeAttrPathParams = /** @class */ (function (_super) {
    __extends(ProtocolNetflowChangeAttrPathParams, _super);
    function ProtocolNetflowChangeAttrPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolNetflowChangeAttrPathParams.prototype, "agentNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=attr" }),
        __metadata("design:type", String)
    ], ProtocolNetflowChangeAttrPathParams.prototype, "attr", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=field-num" }),
        __metadata("design:type", Number)
    ], ProtocolNetflowChangeAttrPathParams.prototype, "fieldNum", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=flowset-uid" }),
        __metadata("design:type", Number)
    ], ProtocolNetflowChangeAttrPathParams.prototype, "flowsetUid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=value" }),
        __metadata("design:type", String)
    ], ProtocolNetflowChangeAttrPathParams.prototype, "value", void 0);
    return ProtocolNetflowChangeAttrPathParams;
}(SpeakeasyBase));
export { ProtocolNetflowChangeAttrPathParams };
var ProtocolNetflowChangeAttrRequest = /** @class */ (function (_super) {
    __extends(ProtocolNetflowChangeAttrRequest, _super);
    function ProtocolNetflowChangeAttrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProtocolNetflowChangeAttrPathParams)
    ], ProtocolNetflowChangeAttrRequest.prototype, "pathParams", void 0);
    return ProtocolNetflowChangeAttrRequest;
}(SpeakeasyBase));
export { ProtocolNetflowChangeAttrRequest };
var ProtocolNetflowChangeAttrResponse = /** @class */ (function (_super) {
    __extends(ProtocolNetflowChangeAttrResponse, _super);
    function ProtocolNetflowChangeAttrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolNetflowChangeAttrResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProtocolNetflowChangeAttrResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProtocolNetflowChangeAttrResponse.prototype, "protocolNetflowChangeAttr200ApplicationJsonString", void 0);
    return ProtocolNetflowChangeAttrResponse;
}(SpeakeasyBase));
export { ProtocolNetflowChangeAttrResponse };
