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
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";
var UpdateServiceInstanceInput = /** @class */ (function (_super) {
    __extends(UpdateServiceInstanceInput, _super);
    function UpdateServiceInstanceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=deploymentType" }),
        __metadata("design:type", String)
    ], UpdateServiceInstanceInput.prototype, "deploymentType", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateServiceInstanceInput.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], UpdateServiceInstanceInput.prototype, "serviceName", void 0);
    __decorate([
        Metadata({ data: "json, name=spec" }),
        __metadata("design:type", String)
    ], UpdateServiceInstanceInput.prototype, "spec", void 0);
    __decorate([
        Metadata({ data: "json, name=templateMajorVersion" }),
        __metadata("design:type", String)
    ], UpdateServiceInstanceInput.prototype, "templateMajorVersion", void 0);
    __decorate([
        Metadata({ data: "json, name=templateMinorVersion" }),
        __metadata("design:type", String)
    ], UpdateServiceInstanceInput.prototype, "templateMinorVersion", void 0);
    return UpdateServiceInstanceInput;
}(SpeakeasyBase));
export { UpdateServiceInstanceInput };
