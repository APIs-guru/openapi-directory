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
var StromkontoLoginRequestBody = /** @class */ (function (_super) {
    __extends(StromkontoLoginRequestBody, _super);
    function StromkontoLoginRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], StromkontoLoginRequestBody.prototype, "email", void 0);
    return StromkontoLoginRequestBody;
}(SpeakeasyBase));
export { StromkontoLoginRequestBody };
export var StromkontoLogin200ApplicationJsonStatusEnum;
(function (StromkontoLogin200ApplicationJsonStatusEnum) {
    StromkontoLogin200ApplicationJsonStatusEnum["Registered"] = "registered";
    StromkontoLogin200ApplicationJsonStatusEnum["Unregistered"] = "unregistered";
})(StromkontoLogin200ApplicationJsonStatusEnum || (StromkontoLogin200ApplicationJsonStatusEnum = {}));
var StromkontoLogin200ApplicationJson = /** @class */ (function (_super) {
    __extends(StromkontoLogin200ApplicationJson, _super);
    function StromkontoLogin200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], StromkontoLogin200ApplicationJson.prototype, "status", void 0);
    return StromkontoLogin200ApplicationJson;
}(SpeakeasyBase));
export { StromkontoLogin200ApplicationJson };
var StromkontoLoginRequest = /** @class */ (function (_super) {
    __extends(StromkontoLoginRequest, _super);
    function StromkontoLoginRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", StromkontoLoginRequestBody)
    ], StromkontoLoginRequest.prototype, "request", void 0);
    return StromkontoLoginRequest;
}(SpeakeasyBase));
export { StromkontoLoginRequest };
var StromkontoLoginResponse = /** @class */ (function (_super) {
    __extends(StromkontoLoginResponse, _super);
    function StromkontoLoginResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StromkontoLoginResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StromkontoLoginResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StromkontoLogin200ApplicationJson)
    ], StromkontoLoginResponse.prototype, "stromkontoLogin200ApplicationJsonObject", void 0);
    return StromkontoLoginResponse;
}(SpeakeasyBase));
export { StromkontoLoginResponse };
