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
var SingleEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(SingleEnvironmentPathParams, _super);
    function SingleEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_uid" }),
        __metadata("design:type", String)
    ], SingleEnvironmentPathParams.prototype, "environmentUid", void 0);
    return SingleEnvironmentPathParams;
}(SpeakeasyBase));
export { SingleEnvironmentPathParams };
var SingleEnvironment200ApplicationJsonEnvironmentValues = /** @class */ (function (_super) {
    __extends(SingleEnvironment200ApplicationJsonEnvironmentValues, _super);
    function SingleEnvironment200ApplicationJsonEnvironmentValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], SingleEnvironment200ApplicationJsonEnvironmentValues.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hovered" }),
        __metadata("design:type", Boolean)
    ], SingleEnvironment200ApplicationJsonEnvironmentValues.prototype, "hovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], SingleEnvironment200ApplicationJsonEnvironmentValues.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], SingleEnvironment200ApplicationJsonEnvironmentValues.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], SingleEnvironment200ApplicationJsonEnvironmentValues.prototype, "value", void 0);
    return SingleEnvironment200ApplicationJsonEnvironmentValues;
}(SpeakeasyBase));
export { SingleEnvironment200ApplicationJsonEnvironmentValues };
var SingleEnvironment200ApplicationJsonEnvironment = /** @class */ (function (_super) {
    __extends(SingleEnvironment200ApplicationJsonEnvironment, _super);
    function SingleEnvironment200ApplicationJsonEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SingleEnvironment200ApplicationJsonEnvironment.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SingleEnvironment200ApplicationJsonEnvironment.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values", elemType: SingleEnvironment200ApplicationJsonEnvironmentValues }),
        __metadata("design:type", Array)
    ], SingleEnvironment200ApplicationJsonEnvironment.prototype, "values", void 0);
    return SingleEnvironment200ApplicationJsonEnvironment;
}(SpeakeasyBase));
export { SingleEnvironment200ApplicationJsonEnvironment };
var SingleEnvironment200ApplicationJson = /** @class */ (function (_super) {
    __extends(SingleEnvironment200ApplicationJson, _super);
    function SingleEnvironment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", SingleEnvironment200ApplicationJsonEnvironment)
    ], SingleEnvironment200ApplicationJson.prototype, "environment", void 0);
    return SingleEnvironment200ApplicationJson;
}(SpeakeasyBase));
export { SingleEnvironment200ApplicationJson };
var SingleEnvironmentRequest = /** @class */ (function (_super) {
    __extends(SingleEnvironmentRequest, _super);
    function SingleEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleEnvironmentPathParams)
    ], SingleEnvironmentRequest.prototype, "pathParams", void 0);
    return SingleEnvironmentRequest;
}(SpeakeasyBase));
export { SingleEnvironmentRequest };
var SingleEnvironmentResponse = /** @class */ (function (_super) {
    __extends(SingleEnvironmentResponse, _super);
    function SingleEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SingleEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SingleEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SingleEnvironment200ApplicationJson)
    ], SingleEnvironmentResponse.prototype, "singleEnvironment200ApplicationJsonObject", void 0);
    return SingleEnvironmentResponse;
}(SpeakeasyBase));
export { SingleEnvironmentResponse };
