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
var CfgLoadPathParams = /** @class */ (function (_super) {
    __extends(CfgLoadPathParams, _super);
    function CfgLoadPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cfgFile" }),
        __metadata("design:type", String)
    ], CfgLoadPathParams.prototype, "cfgFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firstAgentNum" }),
        __metadata("design:type", Number)
    ], CfgLoadPathParams.prototype, "firstAgentNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lastAgentNum" }),
        __metadata("design:type", Number)
    ], CfgLoadPathParams.prototype, "lastAgentNum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=startAgentNum" }),
        __metadata("design:type", Number)
    ], CfgLoadPathParams.prototype, "startAgentNum", void 0);
    return CfgLoadPathParams;
}(SpeakeasyBase));
export { CfgLoadPathParams };
var CfgLoadRequest = /** @class */ (function (_super) {
    __extends(CfgLoadRequest, _super);
    function CfgLoadRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CfgLoadPathParams)
    ], CfgLoadRequest.prototype, "pathParams", void 0);
    return CfgLoadRequest;
}(SpeakeasyBase));
export { CfgLoadRequest };
var CfgLoadResponse = /** @class */ (function (_super) {
    __extends(CfgLoadResponse, _super);
    function CfgLoadResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CfgLoadResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CfgLoadResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CfgLoadResponse.prototype, "cfgLoad200ApplicationJsonObject", void 0);
    return CfgLoadResponse;
}(SpeakeasyBase));
export { CfgLoadResponse };
