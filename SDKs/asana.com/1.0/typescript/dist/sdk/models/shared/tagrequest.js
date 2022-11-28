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
export var TagRequestColorEnum;
(function (TagRequestColorEnum) {
    TagRequestColorEnum["DarkPink"] = "dark-pink";
    TagRequestColorEnum["DarkGreen"] = "dark-green";
    TagRequestColorEnum["DarkBlue"] = "dark-blue";
    TagRequestColorEnum["DarkRed"] = "dark-red";
    TagRequestColorEnum["DarkTeal"] = "dark-teal";
    TagRequestColorEnum["DarkBrown"] = "dark-brown";
    TagRequestColorEnum["DarkOrange"] = "dark-orange";
    TagRequestColorEnum["DarkPurple"] = "dark-purple";
    TagRequestColorEnum["DarkWarmGray"] = "dark-warm-gray";
    TagRequestColorEnum["LightPink"] = "light-pink";
    TagRequestColorEnum["LightGreen"] = "light-green";
    TagRequestColorEnum["LightBlue"] = "light-blue";
    TagRequestColorEnum["LightRed"] = "light-red";
    TagRequestColorEnum["LightTeal"] = "light-teal";
    TagRequestColorEnum["LightBrown"] = "light-brown";
    TagRequestColorEnum["LightOrange"] = "light-orange";
    TagRequestColorEnum["LightPurple"] = "light-purple";
    TagRequestColorEnum["LightWarmGray"] = "light-warm-gray";
})(TagRequestColorEnum || (TagRequestColorEnum = {}));
var TagRequestInput = /** @class */ (function (_super) {
    __extends(TagRequestInput, _super);
    function TagRequestInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], TagRequestInput.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=followers" }),
        __metadata("design:type", Array)
    ], TagRequestInput.prototype, "followers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagRequestInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=workspace" }),
        __metadata("design:type", String)
    ], TagRequestInput.prototype, "workspace", void 0);
    return TagRequestInput;
}(SpeakeasyBase));
export { TagRequestInput };
