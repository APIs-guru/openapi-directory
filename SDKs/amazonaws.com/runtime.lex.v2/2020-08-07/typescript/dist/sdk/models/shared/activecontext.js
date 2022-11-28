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
import { ActiveContextTimeToLive } from "./activecontexttimetolive";
// ActiveContext
/**
 * <p>Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.</p> <p>Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is <code>order-fulfilled</code>, only intents that have <code>order-fulfilled</code> configured as a trigger are considered for follow up.</p>
**/
var ActiveContext = /** @class */ (function (_super) {
    __extends(ActiveContext, _super);
    function ActiveContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contextAttributes" }),
        __metadata("design:type", Map)
    ], ActiveContext.prototype, "contextAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ActiveContext.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeToLive" }),
        __metadata("design:type", ActiveContextTimeToLive)
    ], ActiveContext.prototype, "timeToLive", void 0);
    return ActiveContext;
}(SpeakeasyBase));
export { ActiveContext };
