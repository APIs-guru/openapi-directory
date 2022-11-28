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
import { VariableSet } from "./variableset";
// ConfigurationVariables
/**
 * A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
**/
var ConfigurationVariables = /** @class */ (function (_super) {
    __extends(ConfigurationVariables, _super);
    function ConfigurationVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mcmId" }),
        __metadata("design:type", String)
    ], ConfigurationVariables.prototype, "mcmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variableSet", elemType: VariableSet }),
        __metadata("design:type", Array)
    ], ConfigurationVariables.prototype, "variableSet", void 0);
    return ConfigurationVariables;
}(SpeakeasyBase));
export { ConfigurationVariables };
