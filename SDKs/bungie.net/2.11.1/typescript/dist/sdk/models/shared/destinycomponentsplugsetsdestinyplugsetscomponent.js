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
import { DestinySocketsDestinyItemPlug } from "./destinysocketsdestinyitemplug";
// DestinyComponentsPlugSetsDestinyPlugSetsComponent
/**
 * Sockets may refer to a "Plug Set": a set of reusable plugs that may be shared across multiple sockets (or even, in theory, multiple sockets over multiple items).
 * This is the set of those plugs that we came across in the users' inventory, along with the values for plugs in the set. Any given set in this component may be represented in Character and Profile-level, as some plugs may be Profile-level restricted, and some character-level restricted. (note that the ones that are even more specific will remain on the actual socket component itself, as they cannot be reused)
**/
var DestinyComponentsPlugSetsDestinyPlugSetsComponent = /** @class */ (function (_super) {
    __extends(DestinyComponentsPlugSetsDestinyPlugSetsComponent, _super);
    function DestinyComponentsPlugSetsDestinyPlugSetsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: DestinySocketsDestinyItemPlug, elemDepth: 2 }),
        __metadata("design:type", Map)
    ], DestinyComponentsPlugSetsDestinyPlugSetsComponent.prototype, "plugs", void 0);
    return DestinyComponentsPlugSetsDestinyPlugSetsComponent;
}(SpeakeasyBase));
export { DestinyComponentsPlugSetsDestinyPlugSetsComponent };
