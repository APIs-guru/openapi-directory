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
import { ScriptTypeEnum } from "./scripttypeenum";
import { Source } from "./source";
// SsmValidationParameters
/**
 * Contains validation parameters.
**/
var SsmValidationParameters = /** @class */ (function (_super) {
    __extends(SsmValidationParameters, _super);
    function SsmValidationParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], SsmValidationParameters.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=executionTimeoutSeconds" }),
        __metadata("design:type", Number)
    ], SsmValidationParameters.prototype, "executionTimeoutSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceId" }),
        __metadata("design:type", String)
    ], SsmValidationParameters.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outputS3BucketName" }),
        __metadata("design:type", String)
    ], SsmValidationParameters.prototype, "outputS3BucketName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scriptType" }),
        __metadata("design:type", String)
    ], SsmValidationParameters.prototype, "scriptType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", Source)
    ], SsmValidationParameters.prototype, "source", void 0);
    return SsmValidationParameters;
}(SpeakeasyBase));
export { SsmValidationParameters };
