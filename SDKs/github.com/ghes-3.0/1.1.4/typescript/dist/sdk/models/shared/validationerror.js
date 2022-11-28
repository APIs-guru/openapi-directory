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
var ValidationErrorErrors = /** @class */ (function (_super) {
    __extends(ValidationErrorErrors, _super);
    function ValidationErrorErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], ValidationErrorErrors.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], ValidationErrorErrors.prototype, "field", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=index" }),
        __metadata("design:type", Number)
    ], ValidationErrorErrors.prototype, "index", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ValidationErrorErrors.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resource" }),
        __metadata("design:type", String)
    ], ValidationErrorErrors.prototype, "resource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], ValidationErrorErrors.prototype, "value", void 0);
    return ValidationErrorErrors;
}(SpeakeasyBase));
export { ValidationErrorErrors };
// ValidationError
/**
 * Validation Error
**/
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], ValidationError.prototype, "documentationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: ValidationErrorErrors }),
        __metadata("design:type", Array)
    ], ValidationError.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ValidationError.prototype, "message", void 0);
    return ValidationError;
}(SpeakeasyBase));
export { ValidationError };
