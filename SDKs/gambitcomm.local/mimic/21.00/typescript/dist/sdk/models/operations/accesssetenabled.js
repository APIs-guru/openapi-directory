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
var AccessSetEnabledPathParams = /** @class */ (function (_super) {
    __extends(AccessSetEnabledPathParams, _super);
    function AccessSetEnabledPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=enabledOrNot" }),
        __metadata("design:type", String)
    ], AccessSetEnabledPathParams.prototype, "enabledOrNot", void 0);
    return AccessSetEnabledPathParams;
}(SpeakeasyBase));
export { AccessSetEnabledPathParams };
var AccessSetEnabledRequest = /** @class */ (function (_super) {
    __extends(AccessSetEnabledRequest, _super);
    function AccessSetEnabledRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AccessSetEnabledPathParams)
    ], AccessSetEnabledRequest.prototype, "pathParams", void 0);
    return AccessSetEnabledRequest;
}(SpeakeasyBase));
export { AccessSetEnabledRequest };
var AccessSetEnabledResponse = /** @class */ (function (_super) {
    __extends(AccessSetEnabledResponse, _super);
    function AccessSetEnabledResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccessSetEnabledResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AccessSetEnabledResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AccessSetEnabledResponse.prototype, "accessSetEnabled200ApplicationJsonString", void 0);
    return AccessSetEnabledResponse;
}(SpeakeasyBase));
export { AccessSetEnabledResponse };
