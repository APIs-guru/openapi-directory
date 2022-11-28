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
// HomeDirectoryMapEntry
/**
 * <p>Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.</p> <p>The following is an <code>Entry</code> and <code>Target</code> pair example for <code>chroot</code>.</p> <p> <code>[ { "Entry:": "/", "Target": "/bucket_name/home/mydirectory" } ]</code> </p> <note> <p>If the target of a logical directory entry does not exist in Amazon S3 or EFS, the entry is ignored. As a workaround, you can use the Amazon S3 API or EFS API to create 0 byte objects as place holders for your directory. If using the CLI, use the <code>s3api</code> or <code>efsapi</code> call instead of <code>s3</code> or <code>efs</code> so you can use the put-object operation. For example, you use the following: <code>aws s3api put-object --bucket bucketname --key path/to/folder/</code>. Make sure that the end of the key name ends in a <code>/</code> for it to be considered a folder.</p> </note>
**/
var HomeDirectoryMapEntry = /** @class */ (function (_super) {
    __extends(HomeDirectoryMapEntry, _super);
    function HomeDirectoryMapEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Entry" }),
        __metadata("design:type", String)
    ], HomeDirectoryMapEntry.prototype, "entry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Target" }),
        __metadata("design:type", String)
    ], HomeDirectoryMapEntry.prototype, "target", void 0);
    return HomeDirectoryMapEntry;
}(SpeakeasyBase));
export { HomeDirectoryMapEntry };
