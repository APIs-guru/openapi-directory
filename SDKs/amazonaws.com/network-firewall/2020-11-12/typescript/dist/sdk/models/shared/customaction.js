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
import { ActionDefinition } from "./actiondefinition";
// CustomAction
/**
 * <p>An optional, non-standard action to use for stateless packet handling. You can define this in addition to the standard action that you must specify. </p> <p>You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings. </p> <p>You can use custom actions in the following places: </p> <ul> <li> <p>In a rule group's <a>StatelessRulesAndCustomActions</a> specification. The custom actions are available for use by name inside the <code>StatelessRulesAndCustomActions</code> where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes. </p> </li> <li> <p>In a <a>FirewallPolicy</a> specification, in <code>StatelessCustomActions</code>. The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules. </p> </li> </ul>
**/
var CustomAction = /** @class */ (function (_super) {
    __extends(CustomAction, _super);
    function CustomAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionDefinition" }),
        __metadata("design:type", ActionDefinition)
    ], CustomAction.prototype, "actionDefinition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ActionName" }),
        __metadata("design:type", String)
    ], CustomAction.prototype, "actionName", void 0);
    return CustomAction;
}(SpeakeasyBase));
export { CustomAction };
