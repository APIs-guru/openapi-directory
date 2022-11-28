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
var Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest = /** @class */ (function (_super) {
    __extends(Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest, _super);
    function Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=department, form, name=department;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest.prototype, "department", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guid, form, name=guid;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest.prototype, "guid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ischecked, form, name=ischecked;" }),
        __metadata("design:type", Boolean)
    ], Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest.prototype, "ischecked", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name, form, name=name;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes, form, name=notes;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity, form, name=quantity;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit, form, name=unit;" }),
        __metadata("design:type", String)
    ], Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest.prototype, "unit", void 0);
    return Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest;
}(SpeakeasyBase));
export { Api2ControllersWebApiGroceryListControllerUpdateItemByGuidRequest };
