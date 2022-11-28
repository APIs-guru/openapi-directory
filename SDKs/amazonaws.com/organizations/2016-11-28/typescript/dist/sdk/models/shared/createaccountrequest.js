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
import { IamUserAccessToBillingEnum } from "./iamuseraccesstobillingenum";
import { Tag } from "./tag";
var CreateAccountRequest = /** @class */ (function (_super) {
    __extends(CreateAccountRequest, _super);
    function CreateAccountRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountName" }),
        __metadata("design:type", String)
    ], CreateAccountRequest.prototype, "accountName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Email" }),
        __metadata("design:type", String)
    ], CreateAccountRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IamUserAccessToBilling" }),
        __metadata("design:type", String)
    ], CreateAccountRequest.prototype, "iamUserAccessToBilling", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RoleName" }),
        __metadata("design:type", String)
    ], CreateAccountRequest.prototype, "roleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], CreateAccountRequest.prototype, "tags", void 0);
    return CreateAccountRequest;
}(SpeakeasyBase));
export { CreateAccountRequest };
