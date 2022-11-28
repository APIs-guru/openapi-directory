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
var EchoQueryParams = /** @class */ (function (_super) {
    __extends(EchoQueryParams, _super);
    function EchoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], EchoQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=echo" }),
        __metadata("design:type", String)
    ], EchoQueryParams.prototype, "echo", void 0);
    return EchoQueryParams;
}(SpeakeasyBase));
export { EchoQueryParams };
var Echo200ApplicationJsonEcho = /** @class */ (function (_super) {
    __extends(Echo200ApplicationJsonEcho, _super);
    function Echo200ApplicationJsonEcho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=_content" }),
        __metadata("design:type", String)
    ], Echo200ApplicationJsonEcho.prototype, "content", void 0);
    return Echo200ApplicationJsonEcho;
}(SpeakeasyBase));
export { Echo200ApplicationJsonEcho };
var Echo200ApplicationJson = /** @class */ (function (_super) {
    __extends(Echo200ApplicationJson, _super);
    function Echo200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=echo" }),
        __metadata("design:type", Echo200ApplicationJsonEcho)
    ], Echo200ApplicationJson.prototype, "echo", void 0);
    return Echo200ApplicationJson;
}(SpeakeasyBase));
export { Echo200ApplicationJson };
var EchoRequest = /** @class */ (function (_super) {
    __extends(EchoRequest, _super);
    function EchoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EchoQueryParams)
    ], EchoRequest.prototype, "queryParams", void 0);
    return EchoRequest;
}(SpeakeasyBase));
export { EchoRequest };
var EchoResponse = /** @class */ (function (_super) {
    __extends(EchoResponse, _super);
    function EchoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EchoResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EchoResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Echo200ApplicationJson)
    ], EchoResponse.prototype, "echo200ApplicationJsonObject", void 0);
    return EchoResponse;
}(SpeakeasyBase));
export { EchoResponse };
