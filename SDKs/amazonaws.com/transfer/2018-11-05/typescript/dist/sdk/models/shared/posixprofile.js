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
// PosixProfile
/**
 * The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
**/
var PosixProfile = /** @class */ (function (_super) {
    __extends(PosixProfile, _super);
    function PosixProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Gid" }),
        __metadata("design:type", Number)
    ], PosixProfile.prototype, "gid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryGids" }),
        __metadata("design:type", Array)
    ], PosixProfile.prototype, "secondaryGids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Uid" }),
        __metadata("design:type", Number)
    ], PosixProfile.prototype, "uid", void 0);
    return PosixProfile;
}(SpeakeasyBase));
export { PosixProfile };
