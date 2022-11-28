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
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
var UserInput = /** @class */ (function (_super) {
    __extends(UserInput, _super);
    function UserInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], UserInput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=division" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "division", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], UserInput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_number" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "employeeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], UserInput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserInput.prototype, "username", void 0);
    return UserInput;
}(SpeakeasyBase));
export { UserInput };
var UserOutput = /** @class */ (function (_super) {
    __extends(UserOutput, _super);
    function UserOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address }),
        __metadata("design:type", Array)
    ], UserOutput.prototype, "addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company_name" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=division" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "division", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails", elemType: Email }),
        __metadata("design:type", Array)
    ], UserOutput.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=employee_number" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "employeeNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent_id" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber }),
        __metadata("design:type", Array)
    ], UserOutput.prototype, "phoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserOutput.prototype, "username", void 0);
    return UserOutput;
}(SpeakeasyBase));
export { UserOutput };
