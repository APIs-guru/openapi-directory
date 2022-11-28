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
export var EgressFromIdentityTypeEnum;
(function (EgressFromIdentityTypeEnum) {
    EgressFromIdentityTypeEnum["IdentityTypeUnspecified"] = "IDENTITY_TYPE_UNSPECIFIED";
    EgressFromIdentityTypeEnum["AnyIdentity"] = "ANY_IDENTITY";
    EgressFromIdentityTypeEnum["AnyUserAccount"] = "ANY_USER_ACCOUNT";
    EgressFromIdentityTypeEnum["AnyServiceAccount"] = "ANY_SERVICE_ACCOUNT";
})(EgressFromIdentityTypeEnum || (EgressFromIdentityTypeEnum = {}));
// EgressFrom
/**
 * Defines the conditions under which an EgressPolicy matches a request. Conditions based on information about the source of the request. Note that if the destination of the request is also protected by a ServicePerimeter, then that ServicePerimeter must have an IngressPolicy which allows access in order for this request to succeed.
**/
var EgressFrom = /** @class */ (function (_super) {
    __extends(EgressFrom, _super);
    function EgressFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identities" }),
        __metadata("design:type", Array)
    ], EgressFrom.prototype, "identities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityType" }),
        __metadata("design:type", String)
    ], EgressFrom.prototype, "identityType", void 0);
    return EgressFrom;
}(SpeakeasyBase));
export { EgressFrom };
